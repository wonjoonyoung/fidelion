import React, { useState, useEffect } from 'react';
import { Images } from '../asset/images';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    // 스크롤이 발생하면 화면 상단으로 올라가는 버튼을 표시
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '20px',
        display: isVisible ? 'block' : 'none',
        padding: '10px',
        cursor: 'pointer'
      }}
    >
      <img src={Images.ICON_SCROLL_UP}
            style={{
                width: '36px',
              }}
      />
    </div>
  );
};

export default ScrollToTopButton;
