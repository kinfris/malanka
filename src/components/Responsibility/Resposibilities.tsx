import { ResponsibilityType } from "@/mockData/mock";
import styles from "./responsibility.module.css";
import { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

type PropType = {
  responsibilitiesList: ResponsibilityType[];
};

export const Responsibilities = ({ responsibilitiesList }: PropType) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Accordion data-bs-theme="dark">
      {responsibilitiesList.map(({ title, subTitle, skills }, i) => {
        return (
          <Accordion.Item eventKey={i.toString()} key={i}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
              <p>{subTitle}</p>
              <ul>
                {skills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
