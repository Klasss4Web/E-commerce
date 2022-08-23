export const handleFilter = (e, data, setFilteredData, setInput) => {
  const keyword = e.target.value;

  if (keyword !== "") {
    const results = data?.filter((product) => {
      return (
        product?.user?.email.toLowerCase().includes(keyword.toLowerCase()) ||
        product?.user?.name?.toLowerCase().includes(keyword.toLowerCase()) ||
        product?.name?.toLowerCase().includes(keyword.toLowerCase()) ||
        product?.email?.toLowerCase().includes(keyword.toLowerCase()) 
        
      );
      // Use the toLowerCase() method to make it case-insensitive
    });
    setFilteredData(results);
  } else {
    setFilteredData(data);
  }
  setInput(keyword);
};