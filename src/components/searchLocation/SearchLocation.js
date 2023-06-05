import { useEffect, useState } from "react";
import { cityList } from "../../constant";
import { Container, StyledOption, StyledSelect } from "./styles";

const SearchLocation = ({
  subSelectOptions, // 현재 선택된 구의 값
  setSubSelectOptions, // 선택된 구의 값을 변경하는 함수
  setSelectedComplete, // 최종 선택된 위치 값을 설정하는 함수
  selectOptions, // 현재 선택된 시의 값
  setSelectOptions, // 선택된 시의 값을 변경하는 함수
}) => {
  return (
    <Container>
      <StyledSelect
        defaultValue="시 선택" // 선택 옵션의 기본값을 "시 선택"으로 설정
        onChange={(e, i) => {
          setSelectOptions(e.target.value); // 선택된 시의 값을 변경
          setSubSelectOptions(" "); // 구 선택을 초기화
        }}
      >
        <StyledOption value={1}>시 선택</StyledOption>
        {/*// 기본값으로 설정할 옵션*/}
        {cityList.map((city, i) => {
          return (
            <StyledOption key={i} value={city.city}>
              {city.city}
              {/*// 도시 이름을 옵션 값으로 설정*/}
            </StyledOption>
          );
        })}
      </StyledSelect>

      <div>
        <StyledSelect
          value={subSelectOptions} // 현재 선택된 구의 값으로 설정
          onChange={(e) => {
            setSubSelectOptions(e.target.value); // 선택된 구의 값을 변경
            if (selectOptions !== "") {
              setSelectedComplete(selectOptions + " " + e.target.value); // 선택된 시와 구를 조합하여 최종 선택된 위치 값을 설정
            }
          }}
        >
          {/*  // 선택할 수 있는 구의 기본값*/}
          <StyledOption value={selectOptions}>구 선택</StyledOption>
          {cityList
            .find((city) => city.city === selectOptions) // 선택된 시에 해당하는 도시를 찾아서
            ?.[selectOptions].map((district, i) => {
              // 구 목록을 가져와서 각각의 구를 옵션 값으로 설정
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
