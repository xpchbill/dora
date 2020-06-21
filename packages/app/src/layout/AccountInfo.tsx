import React from 'react';
import {
  DarkMode,
  Stack, Avatar, StackDivider, Text, AvatarBadge,
  Menu, MenuButton, MenuList, MenuDivider, MenuItem,
} from '@ALK-UI/core';
import { useDispatch } from 'react-redux';
import {
  ChevronDownIcon, ChevronUpIcon,
} from '@ALK-UI/icons';
import { AppConsumer } from '../components';
import { User } from '../types';
import { signOutActionCreator } from '../store/auth';

type AccountInfoProps = {
  currentUser?: User;
  children?: React.ReactNode;
};

export const AccountInfo: React.FC = (props: AccountInfoProps) => {
  const dispatch = useDispatch();

  return (
    <AppConsumer>
      {({ currentUser }) => (
        <Stack
          align="center"
          direction="row"
          justify="center"
          fontSize="14px"
          fontWeight="semibold"
          spacing="10px"
          divider={
            <StackDivider
              height="18px"
              alignSelf="center"
              borderColor="gray2.90"
            />
          }
        >
          <Text color="gray2.60">Organization: xxx</Text>
          <Menu>
            {({ isOpen }) => (
              <React.Fragment>
                <DarkMode>
                  <MenuButton
                    size="sm"
                    py="0"
                    px="8px"
                    color="gray2.60"
                    bg="transparent"
                    _focus={{ outline: 0, boxShadow: 'none' }}
                  >
                    <Stack
                      spacing="6px"
                      direction="row"
                      align="center"
                    >
                      <Avatar
                        src="#"
                        size="sm"
                        width="26px"
                        height="26px"
                      >
                        <AvatarBadge
                          height="6px"
                          width="6px"
                          bg="green.500"
                          right="3px"
                          bottom="1px"
                          borderWidth="1px"
                          borderColor="white"
                        />
                      </Avatar>
                      <Text>{currentUser?.username}</Text>
                      {
                        isOpen ?
                          <ChevronUpIcon /> :
                          <ChevronDownIcon />
                      }
                    </Stack>
                  </MenuButton>
                </DarkMode>
                <MenuList
                  minWidth="240px"
                >
                  <MenuItem isDisabled>Profile</MenuItem>
                  <MenuItem isDisabled>Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={() => dispatch(signOutActionCreator())}
                  >
                    Sign out
                  </MenuItem>
                </MenuList>
              </React.Fragment>
            )}
          </Menu>
        </Stack>
      )}
    </AppConsumer>
  );
};

export default AccountInfo;
