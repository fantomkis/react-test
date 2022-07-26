import TransationForm from "../TransationForm/TransationForm";
import CategorisList from "../CategorisList/CategorisList";
import s from "./MainPage.module.css";
import Header from "../Header/Header";
const MainPage = () => {
  const isCategoriesList = false;

  return (
    <>
      <Header
        title={isCategoriesList ? " Категорії " : "Журнал витрат"}
        icon={isCategoriesList ? "#icon-arrow-left" : null}
      />
      <main>
        {isCategoriesList ? (
          <CategorisList />
        ) : (
          <>
            <TransationForm />
            <button className="costs">Всі витрати</button>
            <button className="incomes">Всі прибутки</button>
          </>
        )}
      </main>
    </>
  );
};

export default MainPage;
