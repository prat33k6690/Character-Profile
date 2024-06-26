import React from "react";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-secondary text-decoration text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
      </div>
    </div>
  );
};

export default Filter;
