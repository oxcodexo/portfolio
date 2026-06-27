export type CommandType = '/contact' | '/help' | '/projects' | '/clear' | 'unknown';

export type LogType = 'input' | 'output' | 'error' | 'system' | 'success';

export interface ConsoleLogEntry {
  id: string;
  type: LogType;
  content: string;
  timestamp?: string;
}

export type InquiryStep = 'idle' | 'name' | 'email' | 'message' | 'confirm' | 'complete';

export interface InquiryData {
  name?: string;
  email?: string;
  message?: string;
}

export interface DispatchConsoleState {
  logs: ConsoleLogEntry[];
  history: string[];
  historyIndex: number;
  inquiryStep: InquiryStep;
  inquiryData: InquiryData;
}
