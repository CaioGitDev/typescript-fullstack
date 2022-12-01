import { Alien, Bug, Gear, LightbulbFilament, Question } from "phosphor-react";
import { useState } from "react";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    icon: {
      component: <Bug size={36} className="text-brand-500" weight="light" />,
    }
  },
  IDEA: {
    title: "Idea",
    icon: {
      component: <LightbulbFilament size={36} className="text-brand-500" weight="light" />
    }
  },
  FEATURE: {
    title: "Feature",
    icon: {
      component: <Gear size={36} className="text-brand-500" weight="light" />
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg
      w-[calc(100vw-2rem)] md:w-auto">


      {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestart={handleRestartFeedback}
        />
      )}

      <footer>
        Feito com ♥ pela <a className="underline underline-offset-2" href="#">Rocketseat</a>
      </footer>
    </div>
  );
}