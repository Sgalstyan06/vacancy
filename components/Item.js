import React from "react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Item({ item, changePlusBtn }) {
  const [showContent, SetShowContent] = useState(false);
  const ref = useRef(null);

  function openDescription(id) {
    if (!showContent) {
      ref.current.classList.replace("main-item", "descript");
      SetShowContent((prev) => !prev);
    } else {
      ref.current.classList.replace("descript", "main-item");
      SetShowContent((prev) => !prev);
    }
    changePlusBtn(id);    
  }
  return (
    <div ref={ref} className="main-item">
      <div className={`item }`}>
        <Link href={`/vacancy/${item.id}`}>
          <a>
            <span>{item.vacancy}</span>
            <span className="hide">{item.description}</span>
          </a>
        </Link>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            openDescription(item.id);
          }}
        >
        <img  src={item.show_description_button}/>
        </button>
      </div>
      <style jsx>{`

        .main-item {
          position: relative;
          border: 1px solid #1dca9d;
          width: 789px;
          height: 64px;
          margin-top: 17px;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .item {
          position: relative;
        }

        .item a {
          display: block;
          text-decoration: none;
          width: 100%;
          height: 100%;
        }

        .item a span {
          display: inline-block;
          width: 376px;
          height: 34px;
          margin: 15px 393px 15px 20px;
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 34px;
        }

        .btn {
          position: absolute;
          width: 20px;
          height: 20px;
          left: 744px;
          top: 22px;
          z-index: 5;
        }

        .btn button {
          border: none;          
          width: 20px;
          line-height: 22px;          
          color: #1dca9d;
          font-size: 28px;
          background: #ffffff;
          padding: 0;
        }
        
        .descript {
          position: relative;
          width: 789px;
          height: 504px;
          margin-top: 17px;
          background: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border: 1px solid #1dca9d;
        }
      `}</style>
    </div>
  );
}
