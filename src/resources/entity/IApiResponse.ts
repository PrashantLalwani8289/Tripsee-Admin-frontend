export type TApiState = Record<string, any> | null;

export default interface ApiResponse {
  data: TApiState;
  message: string;
  success: string;
  error:   string;
}
