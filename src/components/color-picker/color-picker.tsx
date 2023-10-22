import classNames from 'classnames';
import styles from './color-picker.module.scss';

export interface ColorPickerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ColorPicker = ({ className }: ColorPickerProps) => {
    return <div className={classNames(styles.root, className)}>ColorPicker</div>;
};
