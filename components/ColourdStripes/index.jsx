
import stripeStyles from './index.module.sass';
import utilStyles from '../../styles/utils.module.sass';

export default function CouloredStripes() {
    return (
        <div className={`${stripeStyles['stripes-holder']} ${utilStyles.flex} ${utilStyles['flex-row']}`}>
            <div className={`${stripeStyles['stripes-holder__stripe']}`}></div>
            <div className={`${stripeStyles['stripes-holder__stripe']}`}></div>
            <div className={`${stripeStyles['stripes-holder__stripe']}`}></div>
            <div className={`${stripeStyles['stripes-holder__stripe']}`}></div>
            <div className={`${stripeStyles['stripes-holder__stripe']}`}></div>
        </div>
    )
}