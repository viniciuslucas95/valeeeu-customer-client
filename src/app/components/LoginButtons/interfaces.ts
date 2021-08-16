export interface IProps {
  isFetchingData: boolean;
  isPlataformFetchingData: boolean;
  fetchDataAsync(): void;
  style?: any;
}
