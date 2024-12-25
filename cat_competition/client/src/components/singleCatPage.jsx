import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SingleCatPage() {
  const cats = useSelector((state) => state.cats);
  const params = useParams();
  const selectedCat = cats.find((i) => i.id === Number(params.id));

  if (!selectedCat) {
    return <div>Loading or Cat not found</div>;
  }
  return (
    <>
      <div>
        <div id={"cat_wrapper"}>
          <ul>
            <div id="cat">
              <img
                className="cat_img"
                alt={selectedCat.name}
                src={selectedCat.img}
              />
              <li>{selectedCat.name}</li>
              <p>{selectedCat.description}</p>
              <p>{selectedCat.voteCount}</p>
            </div>
          </ul>
          <div>
            <button id="vote_button">Vote</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCatPage;
