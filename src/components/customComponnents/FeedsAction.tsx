import { TouchableOpacity } from "react-native"
import { Icon,  } from "react-native-elements"
import fontSize from "../../constants/fontSize"
import CustomText from "./CustomText"
import colors from "../../constants/colors"

export const FeedsAction = ({ onPress, type = 'feather', name = 'share-2',fontFamily="regular", count ,size=24,styleText={},font=fontSize.caption}) => {

    return (

        <TouchableOpacity onPress={onPress} style={{ display: "flex", flexDirection: "row", alignItems: "center",  }}>
            <Icon size={size} name={name} type={type} color={colors.grey45} />
            {count && <CustomText style={{ marginLeft: -8,...styleText }} fontFamily={fontFamily} fontsize={font} text={count} />}
        </TouchableOpacity>



    )
}