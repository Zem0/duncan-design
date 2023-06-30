import iconCardStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function IconCard({additionalClassNames, children, icon}) {
    const Icon = icon;
    return (
        <div className={`${iconCardStyles.card} ${utilStyles.flex} ${utilStyles['fully-aligned']} ${utilStyles['rounded-m']} ${additionalClassNames}`}>
            {[children]}
            {icon &&
                <Icon className={`${iconCardStyles['card__icon']}`}/>
            }
        </div>
    );
}