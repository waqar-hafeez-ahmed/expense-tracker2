import React from "react";

const FilteredExpense = (props) => {
  const onFilterSelectHandler = (e) => {
    props.onFilteredExpense(e.target.value);
  };

  return (
    <div className="flex justify-between items-center mx-5 my-2 max-sm:mx-0">
      <label
        className="text-xl max-sm:text-base font-medium font-baloo text-white"
        htmlFor="form"
      >
        Filter by year
      </label>
      <select
        id="form"
        className=" w-36 max-sm:w-24 max-sm:text-sm max-sm:py-1 max-sm:mb-2 bg-white text-center py-2 rounded-md font-bold"
        value={props.selectedValue}
        onChange={onFilterSelectHandler}
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default FilteredExpense;
