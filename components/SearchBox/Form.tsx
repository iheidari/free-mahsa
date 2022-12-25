import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useTranslate from "../../hooks/useTranslate";

type Props = {};

type Inputs = {
  q: string;
};
const Form = (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { t } = useTranslate();
  const { register, handleSubmit } = useForm<Inputs>();
  const { ref: hookRef, ...rest } = register("q");
  const { push } = useRouter();

  const handleFormSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    push(`/search/${data.q}`);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
        id="q"
        ref={(e) => {
          hookRef(e);
          if (ref && typeof ref !== "function") {
            ref.current = e;
          }
        }}
        {...rest}
        type="search"
        placeholder={t("جستجو")}
      />
    </form>
  );
};

export default React.forwardRef<HTMLInputElement, Props>(Form);
