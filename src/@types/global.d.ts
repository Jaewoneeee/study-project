declare global {}
type PartialPick<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>;
