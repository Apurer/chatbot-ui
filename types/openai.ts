import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  Luna_LLAMA = 'luna-llama2',
  LLAMA_2_13B = 'llama2-13b',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.Luna_LLAMA;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.Luna_LLAMA]: {
    id: OpenAIModelID.Luna_LLAMA,
    name: 'Luna ai llama 2',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.LLAMA_2_13B]: {
    id: OpenAIModelID.LLAMA_2_13B,
    name: 'llama 2 13B',
    maxLength: 12000,
    tokenLimit: 4000,
  },
};
