import type { TypeNavigation } from "./TypeNavigation";
export default function ButtonNavigation({ navigation }: { navigation: TypeNavigation }) {
    return (
        <a href={navigation.href} className={`${navigation.style ? navigation.style : 'text-white'} transition-colors duration-300 hover:text-green-400`}>
            {navigation.name}
        </a>
    );
}