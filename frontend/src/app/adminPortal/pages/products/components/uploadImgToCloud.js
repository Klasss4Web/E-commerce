export const handleCreateNewsEvent = (e, files) => {
  e.preventDefault();
  setLoading(true);

  const uploaders = (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "ochade-emmanuel");

    return axios
      .post(
        "https://api.cloudinary.com/v1_1/emy-commerce/image/upload",
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      )
      .then((response) => {
        const data = response.data;
        const imgUrlsFromCloudinary = data.secure_url;
      });
  };

  // axios.all(uploaders).then(() => {
  //   const payload = {
  //     title,
  //     content: message,
  //     userId,
  //     image: imgUrlsFromCloudinary,
  //   };

  //   console.log("payload", payload);
  //   createNewsEvent(payload, setLoading, setRefresh);
  // });
};
