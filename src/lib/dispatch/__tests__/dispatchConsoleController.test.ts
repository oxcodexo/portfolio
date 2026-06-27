import { describe, it, expect, beforeEach } from 'vitest';
import { DispatchConsoleController } from '../dispatchConsoleController';

describe('DispatchConsoleController', () => {
  let controller: DispatchConsoleController;

  beforeEach(() => {
    controller = new DispatchConsoleController();
  });

  it('initializes with welcome system logs', () => {
    const state = controller.getState();
    expect(state.logs.length).toBeGreaterThan(0);
    expect(state.logs[0].type).toBe('system');
  });

  it('parses and executes /help command', () => {
    controller.executeInput('/help');
    const state = controller.getState();
    expect(state.logs.some(log => log.content.includes('Available commands'))).toBe(true);
    expect(state.history).toContain('/help');
  });

  it('executes /clear command to wipe logs buffer except system ready prompt', () => {
    controller.executeInput('/help');
    expect(controller.getState().logs.length).toBeGreaterThan(2);
    controller.executeInput('/clear');
    const state = controller.getState();
    expect(state.logs.length).toBe(1);
    expect(state.logs[0].content).toContain('Buffer cleared');
  });

  it('executes /projects command to list architecture portfolio links', () => {
    controller.executeInput('/projects');
    const state = controller.getState();
    expect(state.logs.some(log => log.content.includes('OpenClaw'))).toBe(true);
  });

  it('manages command history stack navigation with up and down keys', () => {
    controller.executeInput('/help');
    controller.executeInput('/projects');

    // Up key gets previous command
    expect(controller.navigateHistory('up')).toBe('/projects');
    expect(controller.navigateHistory('up')).toBe('/help');
    // Boundary check
    expect(controller.navigateHistory('up')).toBe('/help');

    // Down key moves forward
    expect(controller.navigateHistory('down')).toBe('/projects');
    expect(controller.navigateHistory('down')).toBe('');
  });

  it('handles /contact command by starting interactive inquiry flow', () => {
    controller.executeInput('/contact');
    const state = controller.getState();
    expect(state.inquiryStep).toBe('name');
    expect(state.logs.some(log => log.content.includes('Enter your Name'))).toBe(true);
  });

  it('completes multi-step inquiry flow interactively', () => {
    controller.executeInput('/contact');
    expect(controller.getState().inquiryStep).toBe('name');

    controller.executeInput('Alex Recruiter');
    expect(controller.getState().inquiryStep).toBe('email');
    expect(controller.getState().inquiryData.name).toBe('Alex Recruiter');

    controller.executeInput('alex@techcompany.com');
    expect(controller.getState().inquiryStep).toBe('message');
    expect(controller.getState().inquiryData.email).toBe('alex@techcompany.com');

    controller.executeInput('We would love to discuss a Principal Systems Architect role!');
    expect(controller.getState().inquiryStep).toBe('complete');
    expect(controller.getState().logs.some(log => log.content.includes('INQUIRY TRANSMITTED'))).toBe(true);
  });

  it('allows canceling inquiry flow with /cancel', () => {
    controller.executeInput('/contact');
    controller.executeInput('/cancel');
    expect(controller.getState().inquiryStep).toBe('idle');
  });
});
