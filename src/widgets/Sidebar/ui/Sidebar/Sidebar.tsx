import {classNames} from 'shared/lib/classNames/classNames';
import React, {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';
import {Button, ButtonSize, ThemeButton} from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const {t} = useTranslation()

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <div>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cls.item}
                    >
                        <MainIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>
                <div >
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        className={cls.item}
                        to={RoutePath.about}
                    >
                        <AboutIcon className={cls.icon}/>
                        <span className={cls.link}>
                            {t('О cайте')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
