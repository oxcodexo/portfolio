import { DispatchConsoleState, ConsoleLogEntry } from './types';

export class DispatchConsoleController {
  private state: DispatchConsoleState;

  constructor() {
    this.state = {
      logs: [
        {
          id: 'sys-welcome',
          type: 'system',
          content: 'DISPATCH CONSOLE v1.0.0 // Systems Architect Contact Module\nType /help to list available commands.',
          timestamp: new Date().toLocaleTimeString(),
        },
      ],
      history: [],
      historyIndex: -1,
      inquiryStep: 'idle',
      inquiryData: {},
    };
  }

  public getState(): DispatchConsoleState {
    return {
      ...this.state,
      logs: [...this.state.logs],
      history: [...this.state.history],
      inquiryData: { ...this.state.inquiryData },
    };
  }

  public navigateHistory(direction: 'up' | 'down'): string {
    if (this.state.history.length === 0) return '';

    if (direction === 'up') {
      if (this.state.historyIndex > 0) {
        this.state.historyIndex--;
      } else if (this.state.historyIndex === -1) {
        this.state.historyIndex = this.state.history.length - 1;
      }
      return this.state.history[this.state.historyIndex] || '';
    } else {
      if (this.state.historyIndex < this.state.history.length - 1 && this.state.historyIndex !== -1) {
        this.state.historyIndex++;
        return this.state.history[this.state.historyIndex];
      } else {
        this.state.historyIndex = this.state.history.length;
        return '';
      }
    }
  }

  public executeInput(input: string): void {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Handle interactive inquiry flow if active
    if (this.state.inquiryStep !== 'idle' && this.state.inquiryStep !== 'complete') {
      this.handleInquiryStep(trimmed);
      return;
    }

    // If step was complete and new command is entered, reset inquiry state to idle
    if (this.state.inquiryStep === 'complete') {
      this.state.inquiryStep = 'idle';
      this.state.inquiryData = {};
    }

    // Record input log
    this.addLog('input', `dispatch@portfolio:~$ ${trimmed}`);

    // Push to history
    this.state.history.push(trimmed);
    this.state.historyIndex = this.state.history.length;

    const cmd = trimmed.toLowerCase();

    if (cmd === '/help') {
      this.addLog(
        'output',
        `Available commands:\n  /contact   - Send direct inquiry or launch interactive prompt\n  /projects  - View flagship case studies & architectural work\n  /clear     - Clear terminal buffer\n  /help      - Display this help message`
      );
    } else if (cmd === '/clear') {
      this.state.logs = [
        {
          id: `sys-${Date.now()}`,
          type: 'system',
          content: 'Buffer cleared. Type /help for available commands.',
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
    } else if (cmd === '/projects') {
      this.addLog(
        'output',
        `Flagship Architecture Case Studies:\n  1. OpenClaw framework (Autonomous Agent Orchestration)\n  2. Qrox Cloud (Real-Time Micro-SaaS Engine)\n  3. OmniPilot-CX (Multi-Model Agent Router)\n  Type /contact to get in touch directly.`
      );
    } else if (cmd === '/contact') {
      this.state.inquiryStep = 'name';
      this.state.inquiryData = {};
      this.addLog(
        'system',
        `[INQUIRY TRANSMISSION INITIALIZED]\nDirect links fallback:\n  • Email: contact@hichamkraou.com\n  • GitHub: https://github.com/oxcodexo\n  • LinkedIn: https://linkedin.com/in/hichamkraou\n\nPlease Enter your Name (or type /cancel to abort):`
      );
    } else {
      this.addLog('error', `Command not recognized: '${trimmed}'. Type /help for assistance.`);
    }
  }

  private handleInquiryStep(input: string): void {
    const trimmed = input.trim();
    this.addLog('input', `> ${trimmed}`);

    if (trimmed.toLowerCase() === '/cancel') {
      this.state.inquiryStep = 'idle';
      this.state.inquiryData = {};
      this.addLog('system', 'Inquiry transmission cancelled.');
      return;
    }

    if (this.state.inquiryStep === 'name') {
      this.state.inquiryData.name = trimmed;
      this.state.inquiryStep = 'email';
      this.addLog('system', `Thank you, ${trimmed}. Please Enter your Email address:`);
    } else if (this.state.inquiryStep === 'email') {
      this.state.inquiryData.email = trimmed;
      this.state.inquiryStep = 'message';
      this.addLog('system', `Got it. Please enter your Message / Inquiry details:`);
    } else if (this.state.inquiryStep === 'message') {
      this.state.inquiryData.message = trimmed;
      this.state.inquiryStep = 'complete';
      this.addLog(
        'success',
        `[INQUIRY TRANSMITTED SUCCESSFULLY]\nFrom: ${this.state.inquiryData.name} <${this.state.inquiryData.email}>\nMessage: "${this.state.inquiryData.message}"\n\nTelemetry dispatched. Hicham Kraou will respond shortly.`
      );
    }
  }

  private addLog(type: ConsoleLogEntry['type'], content: string): void {
    this.state.logs.push({
      id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      type,
      content,
      timestamp: new Date().toLocaleTimeString(),
    });
  }
}
