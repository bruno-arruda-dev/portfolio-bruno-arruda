import classes from './CardFooter.module.scss';
import { CardFooterProps } from '../../types/CardFooterProps';
import { BsGithub, BsLink45Deg } from 'react-icons/bs';
import Stack from '../Stack/Stack';

const CardFooter = ({ github, homepage, stacks }: CardFooterProps) => {
    return (
        <div className={classes.cardFooter}>
            <div className={classes.stacks}>
                {
                    stacks?.map((stack) => (
                        <Stack stack={stack} />
                    ))
                }
            </div>
            <div className={classes.links}>
                <a href={github}>
                    <BsGithub className={classes.github} />
                </a>
                <a href={homepage}>
                    <BsLink45Deg className={classes.homepage} />
                </a>
            </div>
        </div>
    );
}

export default CardFooter;