import React, { useState,useRef,useEffect } from "react";

  function Focus(props) {
    return (
      // フォーカス管理
      function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
    );
  }
export default Focus;