const useExtractUrlSegment = (
  url: string,
  segmentIndex: number
): string | undefined => {
  const segments: string[] = url.split("/"); // Split the path into segments
  return segments[segmentIndex];
};

export default useExtractUrlSegment;
