import { ButtonLogin } from "../styles/Components/ButtonLogin";
import { DivWrapper } from "../styles/Components/DivWrapper";
import { Header } from "../styles/Components/Header";
import { Icon } from "../styles/Components/Icon";
import { Logo } from "../styles/Components/Logo";
import { SearchIcon } from "../styles/Components/SearchIcon";
import { SearchInputWrapper } from "../styles/Components/SearchIconWrapper";
import { SearchInput } from "../styles/Components/SearchInput";

function MenuComponent () {
    return (
        <Header>
            <Logo>Logo</Logo>
            <DivWrapper>
                <SearchInputWrapper>
                    <SearchIcon className="material-symbols-outlined" >Search</SearchIcon>
                    <SearchInput placeholder="Pesquisar..." ></SearchInput>
                </SearchInputWrapper>
                <Icon className="material-symbols-outlined">tune</Icon>
            </DivWrapper>
            <ButtonLogin>Login</ButtonLogin>
        </Header>
    )
}

export default MenuComponent;