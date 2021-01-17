export interface IMail {
  from?: string;
  to: string[];
  cc?: string[];
  replyTo?: string;
  message: {
    subject: string;
    html: string;
  };
}
