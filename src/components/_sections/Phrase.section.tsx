import { useTranslation } from "react-i18next";
import Card from "../Card/Card.tsx";
import { GridClassNames } from "@constants/layout.ts";

export default function PhraseSection() {
  const { t } = useTranslation();

  return (
    <Card classNames={`${GridClassNames.phrase}`}>
      <p className="smooth-text-color text-sm lg:text-lg">
        {t("phrase.first")}
      </p>
      <br />
      <p className="default-text-color font-medium text-base lg:text-xl">
        {t("phrase.second")}
      </p>
    </Card>
  );
}
