function convertLink() {
  const destination = document.getElementById("destination").value.trim();
  const affiliateId = document.getElementById("affiliateId").value.trim();
  const refCode = document.getElementById("refCode").value.trim();
  const goodsId = document.getElementById("goodsId").value.trim();

  if (!destination.includes("shein.com")) {
    document.getElementById("output").innerText = "Invalid Shein link.";
    return;
  }

  let converted = destination;
  let params = [];

  if (affiliateId) params.push("affid=" + affiliateId);
  if (refCode) params.push("ref=" + refCode);
  if (goodsId) params.push("goods_id=" + goodsId);

  converted += (destination.includes("?") ? "&" : "?") + params.join("&");

  document.getElementById("output").innerText = converted;
}
