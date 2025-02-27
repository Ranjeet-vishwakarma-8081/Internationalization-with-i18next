import { Trans, useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  fr: { nativeName: "Français" },
};

const App = () => {
  const { t, i18n } = useTranslation();

  // const code = 404;
  return (
    <>
      <h1>{t("hello")}</h1>
      {Object.keys(lngs).map((lng) => (
        <button
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          // disabled={lng === i18n.language}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
      <h2> {t("welcomeMessage")} </h2>
      {/* <h2>{t([`error.${code}`, `error.unknown`])}</h2> */}

      {/* Pluralization */}
      {/* <p>{t("count_one", { count: 1 })}</p>
      <p>{t("count_other", { count: 2 })}</p> */}

      {/* Interpolation */}
      <Trans i18nKey="greeting">
        Greeting <strong>React</strong>! developers
      </Trans>
      <i>
        {" By -"}
        {t("developerName")}
      </i>
    </>
  );
};

export default App;
