import { ButtonLogin } from "./ButtonLogin";
import { DivWrapper } from "./DivWrapper";
import { Header } from "./Header";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { SearchIcon } from "./SearchIcon";
import { SearchInputWrapper } from "./SearchIconWrapper";
import { SearchInput } from "./SearchInput";

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