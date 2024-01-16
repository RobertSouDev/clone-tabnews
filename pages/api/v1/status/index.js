function status(request, response) {
  response.status(200).json({
    chave: "São a cima da média",
  });
}

export default status;
