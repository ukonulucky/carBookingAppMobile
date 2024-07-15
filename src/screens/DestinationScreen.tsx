import { View, Text, TouchableOpacity } from "react-native";
import React, { useReducer, useRef } from "react";
import { Avatar, Icon } from "react-native-elements";
import { colors, parameters } from "../components/globals/styles";
import { StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "@env";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { mainStackParamList } from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { saveUserDestination, saveUserOrigin } from "../redux/slices/userLocationSlice";

const DestinationScreen = ({
  navigation,
}: NativeStackScreenProps<mainStackParamList>) => {
  const disptach = useAppDispatch();

  const userLocation = useAppSelector(state => state.userLocationReducer.origin)

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: parameters.statusBarHeight,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            ...styles.view1,
            top: -4,
          }}
        >
          <Icon
            type="material-community"
            name="arrow-left"
            color={colors.grey1}
            size={32}
            onPress={() => {
              navigation.goBack();
            }}
            activeOpacity={0.7}
          />
        </View>

        <TouchableOpacity>
          <View
            style={{
              ...styles.view3,
              justifyContent: "center",
            }}
          >
            <Avatar
              rounded
              avatarStyle={{}}
              size={30}
              source={require("../../assets/images/blankProfilePic.jpg")}
            />
            <Text
              style={{
                marginLeft: 5,
                fontSize: 14,
              }}
            >
              For Someone{" "}
            </Text>
            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={12}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* google places section starts */}
    <GooglePlacesAutocomplete
      placeholder={ userLocation.coords.lat ? "Going to..." : "Coming from..." }
      styles={autoComplete}
      debounce={400}
      minLength={2}
      enablePoweredByContainer={false}
      fetchDetails={true}
      query={{
        key: GOOGLE_MAP_API_KEY,
        language: "en",
      }}
      onPress={(data, details) => {
      
        details?.geometry?.location?.lat &&
          details?.geometry?.location?.lng &&
           disptach(
          !userLocation.coords.lat ?   saveUserOrigin({
            coords: {
              lat: details?.geometry?.location?.lat,
              lng: details?.geometry?.location?.lng,
            },
            description:  data?.description || null
           }) : saveUserDestination({
            coords: {
              lat: details?.geometry?.location?.lat,
              lng: details?.geometry?.location?.lng,
            },
            description:  data?.description || null
           })
          );
        
       
        navigation.goBack()
      }}
        /> 
      
      

      {/* google places section ends */}
    </View>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: parameters.statusBarHeight,
  },

  view1: {
    position: "absolute",
    top: parameters.statusBarHeight,
    left: 12,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 10,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: colors.white,
    height: 30,
    zIndex: 10,
  },

  view2: { backgroundColor: colors.white, zIndex: 4, paddingBottom: 10 },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  flatlist: {
    marginTop: 20,
    zIndex: 17,
    elevation: 8,
  },
});

const autoComplete = {
  textInput: {
    backgroundColor: colors.grey6,
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: colors.white,
  },

  textInputContainer: {
    flexDirection: "row",
  },
};
