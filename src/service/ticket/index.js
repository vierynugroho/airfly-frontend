export const tickets = async (id, request) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("booking", request.bookingId);

  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/tickets/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: formData,
    }
  );

  const result = await response.json();
  return result;
};
