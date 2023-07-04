export interface Props {
  bmi: number | null;
  weightStatus: string | null | undefined;
}

export interface UseCalculateResult {
  weight: number | string | null;
  setWeight: React.Dispatch<React.SetStateAction<number | string | null>>;
  height: number | string | null;
  setHeight: React.Dispatch<React.SetStateAction<number | string | null>>;
  bmi: number;
  weightStatus: string | undefined;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}