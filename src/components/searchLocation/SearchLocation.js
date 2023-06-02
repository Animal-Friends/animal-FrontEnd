import { useEffect, useState } from "react";
import { cityList } from "../../constant";
import { Container, StyledOption, StyledSelect } from "./styles";

const SearchLocation = ({
  subSelectOptions,
  setSubSelectOptions,
  setSelectedComplete,
  selectOptions,
  setSelectOptions,
}) => {
  return (
    <Container>
      <StyledSelect
        defaultValue="시 선택" // 기본값 설정
        onChange={(e, i) => {
          setSelectOptions(e.target.value);
          setSubSelectOptions(" "); // 구 선택 초기화
        }}
      >
        <StyledOption value={1}>시 선택</StyledOption>

        {cityList.map((city, i) => {
          return (
            <StyledOption key={i} value={city.city}>
              {city.city}
            </StyledOption>
          );
        })}
      </StyledSelect>

      <div>
        <StyledSelect
          value={subSelectOptions}
          onChange={(e) => {
            setSubSelectOptions(e.target.value);
            if (selectOptions !== "") {
              setSelectedComplete(selectOptions + " " + e.target.value);
            }
          }}
        >
          <StyledOption value={selectOptions}>구 선택</StyledOption>

          {cityList
            .find((city) => city.city === selectOptions)
            ?.[selectOptions].map((district, i) => {
              return (
                <StyledOption key={i} value={district}>
                  {district}
                </StyledOption>
              );
            })}
        </StyledSelect>
      </div>
    </Container>
  );
};

export default SearchLocation;
