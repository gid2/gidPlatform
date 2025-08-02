import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}
// Тестовый компонент
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        throw new Error();
    }, [error]);

    return (
        <Button onClick={onThrow} className={classNames('', {}, [])}>
            {t('throw error')}
        </Button>
    );
};
