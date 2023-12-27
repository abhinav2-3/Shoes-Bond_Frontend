const FormatDate = ({ dateString }) => {
  //   const formatDate = (dateString) => {
  //     return new Date(dateString).toLocaleString("in-IN", { timeZone: "UTC" });
  //   };

  //   const formattedDate = formatDate(dateString);
  //   return <span>{formattedDate}</span>;
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-IN", { timeZone: "UTC" }).format(date);
};

export default FormatDate;
