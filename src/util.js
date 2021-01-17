export const toggleShowReplies = ({ data, index }) => {
  const newData = data;

  const nestedCommentData = {
    ...newData[index],
    showReplies: !newData[index].showReplies
  };
  newData[index] = nestedCommentData;
  return newData
}
