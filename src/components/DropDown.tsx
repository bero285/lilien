import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../style/dropdown.css"; // Make sure this is imported

export default function DropDown({
  title,
  text,
  isOpen,
  onToggle,
}: {
  title: string;
  text: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="dropDown">
      <div className="dropDownHeader" onClick={onToggle}>
        <h3>{title}</h3>
        <FaChevronDown className={`chevronIcon ${isOpen ? "rotate" : ""}`} />
      </div>

      <div
        className="dropDownContent"
        style={{
          height: isOpen ? contentHeight : "0px",
        }}
        ref={contentRef}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
