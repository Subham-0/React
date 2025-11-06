import React from "react";
import TopicPage from "./TopicPage";
import "./Learn.css"; 

// Components
import UseStateExample from "./examples/UseStateExample";
import PropsExample from "./examples/PropsExample";
import UseEffectExample from "./examples/UseEffectExample";
import UseRefExample from "./examples/UseRefExample";
import PropsDrillingExample from "./examples/PropsDrillingExample";

// Code
import propsCode from "./content/code/propsCode";
import useStateCode from "./content/code/useStateCode";
import useEffectCode from "./content/code/useEffectCode";
import useRefCode from "./content/code/useRefCode";
import prosDrillingCode from "./content/code/prosDrillingCode";

// Titles & Theory
import propsTitle from "./content/title/propsTitle";
import propsTheory from "./content/theory/propsTheory";
import useStateTitle from "./content/title/useStateTitle";
import useStateTheory from "./content/theory/useStateTheory";
import useEffectTitle from "./content/title/useEffectTitle";
import useEffectTheory from "./content/theory/useEffectTheory";
import useRefTheory from "./content/theory/useRefTheory";
import useRefTitle from "./content/title/useRefTitle";
import propsDrillingTitle from"./content/title/prosDrillingTitle";
import prosDrillingTheory from "./content/theory/prosDrillingTheory";
import contextAPITitle from "./content/title/contextAPITitle";
import contextAPITheory from "./content/theory/contextAPITheory";
import ContextAPIExample from "./examples/ContextAPIExample";
import contextAPICode from "./content/code/contextAPICode";
import useContextTitle from "./content/title/useContextTitle";
import useContextTheory from "./content/theory/useContextTheory";
import useContextCode from "./content/code/useContextCode";
import UseContextExample from "./examples/UseContextExample";
import useMemoTitle from "./content/title/useMemoTitle";
import useMemoTheory from "./content/theory/useMemoTheory";
import useMemoCode from "./content/code/useMemoCode";
import UseMemoExample from "./examples/UseMemoExample";
import useCallbackTitle from "./content/title/useCallbackTitle";
import useCallbackTheory from "./content/theory/useCallbackTheory";
import UseCallbackExample from "./examples/UseCallbackExample";
import useCallbackCode from "./content/code/useCallbackCode";
import reactFormTitle from "./content/title/reactFormTitle";
import reactFormTheory from "./content/theory/reactFormTheory";
import ReactFormExample from "./examples/ReactFormExample";
import reactFormCode from "./content/code/reactFormCode";
import uncontrolledComponemtTitle from "./content/title/uncontrolledComponemtTitle";
import uncontrolledComponemtTheory from "./content/theory/uncontrolledComponemtTheory";
import uncontrolledComponemtExample from "./examples/uncontrolledComponemtExample";
import uncontrolledComponentCode from "./content/code/uncontrolledComponentCode";

function Learn({ currentTopic, setCurrentTopic }) {
  const topics = {
    props: {
      title: propsTitle,
      theory: propsTheory,
      ExampleComponent: PropsExample,
      codeString: propsCode,
    },
    useState: {
      title: useStateTitle,
      theory: useStateTheory,
      ExampleComponent: UseStateExample,
      codeString: useStateCode,
    },
    useEffect: {
      title: useEffectTitle,
      theory: useEffectTheory,
      ExampleComponent: UseEffectExample,
      codeString: useEffectCode,
    },
    useRef:{
      title:useRefTitle,
      theory:useRefTheory,
      ExampleComponent:UseRefExample,
      codeString:useRefCode,
    },
    propsDrilling:{
      title:propsDrillingTitle,
      theory:prosDrillingTheory,
      ExampleComponent:PropsDrillingExample,
      codeString:prosDrillingCode,
    },
    contextAPI:{
      title:contextAPITitle,
      theory:contextAPITheory,
      ExampleComponent:ContextAPIExample,
      codeString:contextAPICode,
    },
    useContext:{
      title:useContextTitle,
      theory:useContextTheory,
      ExampleComponent:UseContextExample,
      codeString:useContextCode,
    },
    useMemo:{
      title:useMemoTitle,
      theory:useMemoTheory,
      ExampleComponent:UseMemoExample,
      codeString:useMemoCode,
    },useCallback:{
      title:useCallbackTitle,
      theory:useCallbackTheory,
      ExampleComponent:UseCallbackExample,
      codeString:useCallbackCode,
    },
    reactForm:{
      title:reactFormTitle,
      theory:reactFormTheory,
      ExampleComponent:ReactFormExample,
      codeString:reactFormCode,
    },
    uncontrolledComponent:{
      title:uncontrolledComponemtTitle,
      theory:uncontrolledComponemtTheory,
      ExampleComponent:uncontrolledComponemtExample,
      codeString:uncontrolledComponentCode,
    },
  };

  const topicKeys = Object.keys(topics);

  if (currentTopic) {
    const currentIndex = topicKeys.indexOf(currentTopic);
    const topic = topics[currentTopic];

    const prevTitle =
      currentIndex > 0 ? topics[topicKeys[currentIndex - 1]].title : null;
    const nextTitle =
      currentIndex < topicKeys.length - 1
        ? topics[topicKeys[currentIndex + 1]].title
        : null;

    const goToPrevious = () => {
      if (currentIndex > 0) setCurrentTopic(topicKeys[currentIndex - 1]);
    };

    const goToNext = () => {
      if (currentIndex < topicKeys.length - 1)
        setCurrentTopic(topicKeys[currentIndex + 1]);
    };

    return (
      <TopicPage
        key={currentTopic}
        title={topic.title}
        theory={topic.theory}
        ExampleComponent={topic.ExampleComponent}
        codeString={topic.codeString}
        goBack={() => setCurrentTopic("")}
        goNext={goToNext}
        goPrev={goToPrevious}
        prevTitle={prevTitle}
        nextTitle={nextTitle}
      />
    );
  }

  return (
    <div className="learn-container">
      <h2 className="learn-heading">Learn React Topics</h2>
      <div className="topics-grid">
        {topicKeys.map((key) => (
          <button
            key={key}
            className="topic-button"
            onClick={() => setCurrentTopic(key)}
          >
            {topics[key].title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Learn;
