import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  const callServiceCenter = () => {
    window.location.href = "/";
  };
  return (
    <div className="w-full relative bottom-0 bg-gray-300">
      <div className="grid grid-cols-2 ml-4 mr-4 mt-4">
        <div className="customerServiceCenter w-3/4 m-12 justify-center">
          <div className="inline-block">
            <span className="text-rem2_0 inline-block">포포몬 고객센터</span>
            <span className="text-xl block">
              평일 09:30~18:30 (점심시간 12:30~13:30)
            </span>
          </div>
          <button
            type="button"
            onClick={callServiceCenter}
            className="inline w-max ml-rem5_0 align-bottom mb-2 text-rem1_5 border-2 border-black p-1.5 rounded-xl"
          >
            <FontAwesomeIcon icon={faPhone} size="lg" />
            연결하기
          </button>
        </div>
        <div className="w-9/10 m-9 inline-block justify-center items-center text-xl break-words">
          <span>(주)위더스콘텐츠</span>
          <p>
            사업자 정보 대표자: 하인덕 사업자등록번호: 325-36-00382
            통신판매업신고번호: 2021-부산해운대-0158 주소: 부산광역시 해운대구
            센텀북대로 60, 18층 1801호(재송동, 센텀아이에스타워) 고객센터:
            051-782-0998 제휴문의: popomon123@naver.com Copyright © 2023
            popomon. All rights reserved. 이용약관 | 개인정보 취급방침
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
