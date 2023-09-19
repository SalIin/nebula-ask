import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

import { useAppDispatch } from "@/store/hooks";
import { setAnswers } from "@/store/slices/answersSlice";

import { Question } from "@/types/survey";

interface ButtonsGroupProps {
  question: Question;
}

export const ButtonsGroup: React.FC<ButtonsGroupProps> = ({ question }) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const values = question.answers.map(({ title }) => title);

  const handleAnswerChoose = (value: string) => {
    const choosedAnswer = question.answers.find(({ title }) => title === value);

    dispatch(setAnswers({ type: question.id, values: [value] }));

    const isLastQuestion = choosedAnswer!.nextQuestion === "finish";

    const nextPagePathname = isLastQuestion
      ? `/${choosedAnswer!.nextQuestion}`
      : `/question/${choosedAnswer!.nextQuestion}`;

    push(nextPagePathname);
  };

  return (
    <ul className="space-y-5">
      {values.map((value) => (
        <li key={value}>
          <Button
            className="w-full"
            onClick={() => handleAnswerChoose(value)}
            type="button"
          >
            {value}
          </Button>
        </li>
      ))}
    </ul>
  );
};
