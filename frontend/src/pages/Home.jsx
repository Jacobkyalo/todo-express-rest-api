import Header from "../components/Header/Header";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoContextProvider } from "../contexts/TodoContext";
import "./Home.scss";

const Home = () => {
    return (
        <TodoContextProvider>
            <div className="container">
                <div className="container__wrapper">
                    <div className="container__content">
                        <Header />
                        <TodoForm />
                        <TodoList />
                    </div>
                </div>
            </div>
        </TodoContextProvider>
    );
};

export default Home;
