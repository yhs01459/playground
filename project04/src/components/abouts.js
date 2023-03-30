const Abouts = ({ item }) => {
  console.log(item);
  return (
    <div>
      <h2>article about</h2>
      <strong>{item.movieNm}</strong>
      <p>{item.movieCd}</p>
      <p>{item.rnum}</p>
      <p>{item.salesAcc}</p>
      <p>{item.salesAmt}</p>
      <p>{item.salesInten}</p>
      <p>{item.salesShare}</p>
      <p>{item.scrnCnt}</p>
      <p>{item.audiInten}</p>
      <p>{item.rankOldAndNew}</p>
      <p>{item.rankInten}</p>
      <p>{item.openDt}</p>
    </div>
  );
};

export default Abouts;
