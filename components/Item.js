import React from "react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Markup } from "interweave";

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
  console.log("item", item);
  return (
    <div ref={ref} className="main-item">
      <div className={`item `}>
        <Link href={`/vacancy/${item.id}`}>
          <a>
            <span className="vacancy-title">{item.vacancy}</span>

            <div className="hide">
              <div className="accordion-content">
                <span className="first-span">
                  {item.description.first_span}
                </span>

                <p>{item.description.first_p}</p>
                <ul>
                  <li>{item.description.ul.first_li}</li>
                  <li>{item.description.ul.second_li}</li>
                  <li>{item.description.ul.third_li}</li>
                  <li>{item.description.ul.forth_li}</li>
                </ul>

                <p>{item.description.second_p}</p>

                <span>{item.description.second_span}</span>
                <span className="it-sector">{item.description.third_span}</span>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            openDescription(item.id);
          }}
        >
          <img src={item.show_description_button} />
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

        .vacancy-title {
          display: inline-block;
          width: 376px;
          height: 34px;
          margin: 15px 393px 15px 20px;
          font-family: "Ubuntu";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 34px;
          color: #121212;
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

        .accordion-content {
          width: 749px;
          height: 420px;
          margin: 20px 20px 15px 20px;
          padding: 0;
        }

        .accordion-content span, ul>li {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: rgba(0, 0, 0, 0.7);
        }

        .accordion-content p {
          margin-top: 30px;
          margin-bottom: 30px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.7);
        }

        .it-sector {
          display: block;
        }
      `}</style>
    </div>
  );
}
