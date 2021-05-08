import React from "react";
import styled from "styled-components";
import { TextField } from "../../components/inputs/TextField";
import { Divider } from "../../components/others/Divider";
import { H3, Text } from "../../components/texts";
import { Box } from "../../components/wrappers/Box";
import { Colors } from "../../styles/colors";
import { UsersContainerHeader } from "../users/UsersHeader";
import { IoIosSend } from "react-icons/io";

const ChatWrapper = styled.div`
  background-color: ${Colors.PrimaryLight};
  flex: 2;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;

const ChatHeaderContainer = styled(UsersContainerHeader)`
  padding: 0 1rem;
  justify-content: space-between;
`;

export const ChatContainer: React.FC = () => {
  return (
    <ChatWrapper>
      <ChatHeaderContainer>
        <H3>Group chat</H3>
        <span># general</span>
      </ChatHeaderContainer>
      <Divider background={Colors.NeutralLight} />
      <MessagesWindow />
      <Box pl="1rem" pb="1rem" pr="1rem">
        <TextField
          background={Colors.Neutral}
          icon={<IoIosSend />}
          placeholder="Send a message to your friends"
        />
      </Box>
    </ChatWrapper>
  );
};

export const MessagesWindow = () => {
  // more is gonna be added

  return (
    <MessagesContainer>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        adipisci similique possimus maxime consequatur expedita, ex nulla id
        quia nemo, perspiciatis optio, fugit quo officiis rerum. Et ipsum
        officia hic. Possimus laborum quam consequatur! Necessitatibus
        blanditiis sunt nihil quis? Reprehenderit, dolorem ut nobis rem incidunt
        unde recusandae, suscipit voluptates aliquam eius vero reiciendis
        tempora iste? Sit, distinctio. Est, saepe beatae. Libero, non, eligendi
        iure culpa labore iusto mollitia expedita facere, repellendus
        necessitatibus possimus excepturi quam. Cupiditate, totam quis harum
        praesentium vel saepe molestiae commodi reiciendis? Natus recusandae
        pariatur ipsam harum! Quam temporibus alias adipisci. Perferendis alias
        laboriosam eum ut recusandae, dolores ullam maiores aspernatur omnis
        repudiandae hic deleniti sint asperiores. Aliquam iste illo quasi quam
        ex optio excepturi reiciendis aut! Incidunt adipisci quaerat rerum iure
        at, illo earum ipsum officia officiis alias libero eos veniam totam
        delectus assumenda architecto enim hic, inventore in quisquam laboriosam
        nobis. Doloremque mollitia laudantium tempora. Amet deleniti quo aliquid
        dolore numquam architecto voluptate enim quidem id molestiae? Rerum
        blanditiis sequi inventore. Illo pariatur, quae dolorem eligendi nemo,
        in atque deserunt ducimus temporibus cumque, laboriosam alias.
        Laudantium mollitia, excepturi id sed eligendi itaque saepe dignissimos
        labore deserunt? Facere porro beatae, assumenda distinctio quaerat
        incidunt, soluta quas cum, cumque commodi ullam doloremque nostrum nisi
        itaque officiis quia! Voluptate error aut laudantium laborum. Rerum in
        quidem odio delectus eligendi aliquam nostrum, ab corporis aliquid
        pariatur! Ratione, itaque. Minus saepe officia voluptates aut
        dignissimos nostrum qui similique asperiores corporis. Quaerat, sit!
        Odit, nesciunt itaque porro dicta excepturi laborum aliquam magni dolor
        deserunt quibusdam saepe sit voluptates, expedita necessitatibus
        voluptatum! Earum error consequuntur voluptates deserunt accusantium
        repellat repudiandae, quod nulla! Accusamus, esse quidem officia laborum
        nobis beatae facilis doloribus exercitationem odio. Ratione accusantium
        adipisci nihil alias, qui perferendis aliquam repellendus, unde, totam
        consequuntur velit provident amet inventore esse! Eius, molestiae?
      </Text>{" "}
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        adipisci similique possimus maxime consequatur expedita, ex nulla id
        quia nemo, perspiciatis optio, fugit quo officiis rerum. Et ipsum
        officia hic. Possimus laborum quam consequatur! Necessitatibus
        blanditiis sunt nihil quis? Reprehenderit, dolorem ut nobis rem incidunt
        unde recusandae, suscipit voluptates aliquam eius vero reiciendis
        tempora iste? Sit, distinctio. Est, saepe beatae. Libero, non, eligendi
        iure culpa labore iusto mollitia expedita facere, repellendus
        necessitatibus possimus excepturi quam. Cupiditate, totam quis harum
        praesentium vel saepe molestiae commodi reiciendis? Natus recusandae
        pariatur ipsam harum! Quam temporibus alias adipisci. Perferendis alias
        laboriosam eum ut recusandae, dolores ullam maiores aspernatur omnis
        repudiandae hic deleniti sint asperiores. Aliquam iste illo quasi quam
        ex optio excepturi reiciendis aut! Incidunt adipisci quaerat rerum iure
        at, illo earum ipsum officia officiis alias libero eos veniam totam
        delectus assumenda architecto enim hic, inventore in quisquam laboriosam
        nobis. Doloremque mollitia laudantium tempora. Amet deleniti quo aliquid
        dolore numquam architecto voluptate enim quidem id molestiae? Rerum
        blanditiis sequi inventore. Illo pariatur, quae dolorem eligendi nemo,
        in atque deserunt ducimus temporibus cumque, laboriosam alias.
        Laudantium mollitia, excepturi id sed eligendi itaque saepe dignissimos
        labore deserunt? Facere porro beatae, assumenda distinctio quaerat
        incidunt, soluta quas cum, cumque commodi ullam doloremque nostrum nisi
        itaque officiis quia! Voluptate error aut laudantium laborum. Rerum in
        quidem odio delectus eligendi aliquam nostrum, ab corporis aliquid
        pariatur! Ratione, itaque. Minus saepe officia voluptates aut
        dignissimos nostrum qui similique asperiores corporis. Quaerat, sit!
        Odit, nesciunt itaque porro dicta excepturi laborum aliquam magni dolor
        deserunt quibusdam saepe sit voluptates, expedita necessitatibus
        voluptatum! Earum error consequuntur voluptates deserunt accusantium
        repellat repudiandae, quod nulla! Accusamus, esse quidem officia laborum
        nobis beatae facilis doloribus exercitationem odio. Ratione accusantium
        adipisci nihil alias, qui perferendis aliquam repellendus, unde, totam
        consequuntur velit provident amet inventore esse! Eius, molestiae?
      </Text>{" "}
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        adipisci similique possimus maxime consequatur expedita, ex nulla id
        quia nemo, perspiciatis optio, fugit quo officiis rerum. Et ipsum
        officia hic. Possimus laborum quam consequatur! Necessitatibus
        blanditiis sunt nihil quis? Reprehenderit, dolorem ut nobis rem incidunt
        unde recusandae, suscipit voluptates aliquam eius vero reiciendis
        tempora iste? Sit, distinctio. Est, saepe beatae. Libero, non, eligendi
        iure culpa labore iusto mollitia expedita facere, repellendus
        necessitatibus possimus excepturi quam. Cupiditate, totam quis harum
        praesentium vel saepe molestiae commodi reiciendis? Natus recusandae
        pariatur ipsam harum! Quam temporibus alias adipisci. Perferendis alias
        laboriosam eum ut recusandae, dolores ullam maiores aspernatur omnis
        repudiandae hic deleniti sint asperiores. Aliquam iste illo quasi quam
        ex optio excepturi reiciendis aut! Incidunt adipisci quaerat rerum iure
        at, illo earum ipsum officia officiis alias libero eos veniam totam
        delectus assumenda architecto enim hic, inventore in quisquam laboriosam
        nobis. Doloremque mollitia laudantium tempora. Amet deleniti quo aliquid
        dolore numquam architecto voluptate enim quidem id molestiae? Rerum
        blanditiis sequi inventore. Illo pariatur, quae dolorem eligendi nemo,
        in atque deserunt ducimus temporibus cumque, laboriosam alias.
        Laudantium mollitia, excepturi id sed eligendi itaque saepe dignissimos
        labore deserunt? Facere porro beatae, assumenda distinctio quaerat
        incidunt, soluta quas cum, cumque commodi ullam doloremque nostrum nisi
        itaque officiis quia! Voluptate error aut laudantium laborum. Rerum in
        quidem odio delectus eligendi aliquam nostrum, ab corporis aliquid
        pariatur! Ratione, itaque. Minus saepe officia voluptates aut
        dignissimos nostrum qui similique asperiores corporis. Quaerat, sit!
        Odit, nesciunt itaque porro dicta excepturi laborum aliquam magni dolor
        deserunt quibusdam saepe sit voluptates, expedita necessitatibus
        voluptatum! Earum error consequuntur voluptates deserunt accusantium
        repellat repudiandae, quod nulla! Accusamus, esse quidem officia laborum
        nobis beatae facilis doloribus exercitationem odio. Ratione accusantium
        adipisci nihil alias, qui perferendis aliquam repellendus, unde, totam
        consequuntur velit provident amet inventore esse! Eius, molestiae?
      </Text>{" "}
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        adipisci similique possimus maxime consequatur expedita, ex nulla id
        quia nemo, perspiciatis optio, fugit quo officiis rerum. Et ipsum
        officia hic. Possimus laborum quam consequatur! Necessitatibus
        blanditiis sunt nihil quis? Reprehenderit, dolorem ut nobis rem incidunt
        unde recusandae, suscipit voluptates aliquam eius vero reiciendis
        tempora iste? Sit, distinctio. Est, saepe beatae. Libero, non, eligendi
        iure culpa labore iusto mollitia expedita facere, repellendus
        necessitatibus possimus excepturi quam. Cupiditate, totam quis harum
        praesentium vel saepe molestiae commodi reiciendis? Natus recusandae
        pariatur ipsam harum! Quam temporibus alias adipisci. Perferendis alias
        laboriosam eum ut recusandae, dolores ullam maiores aspernatur omnis
        repudiandae hic deleniti sint asperiores. Aliquam iste illo quasi quam
        ex optio excepturi reiciendis aut! Incidunt adipisci quaerat rerum iure
        at, illo earum ipsum officia officiis alias libero eos veniam totam
        delectus assumenda architecto enim hic, inventore in quisquam laboriosam
        nobis. Doloremque mollitia laudantium tempora. Amet deleniti quo aliquid
        dolore numquam architecto voluptate enim quidem id molestiae? Rerum
        blanditiis sequi inventore. Illo pariatur, quae dolorem eligendi nemo,
        in atque deserunt ducimus temporibus cumque, laboriosam alias.
        Laudantium mollitia, excepturi id sed eligendi itaque saepe dignissimos
        labore deserunt? Facere porro beatae, assumenda distinctio quaerat
        incidunt, soluta quas cum, cumque commodi ullam doloremque nostrum nisi
        itaque officiis quia! Voluptate error aut laudantium laborum. Rerum in
        quidem odio delectus eligendi aliquam nostrum, ab corporis aliquid
        pariatur! Ratione, itaque. Minus saepe officia voluptates aut
        dignissimos nostrum qui similique asperiores corporis. Quaerat, sit!
        Odit, nesciunt itaque porro dicta excepturi laborum aliquam magni dolor
        deserunt quibusdam saepe sit voluptates, expedita necessitatibus
        voluptatum! Earum error consequuntur voluptates deserunt accusantium
        repellat repudiandae, quod nulla! Accusamus, esse quidem officia laborum
        nobis beatae facilis doloribus exercitationem odio. Ratione accusantium
        adipisci nihil alias, qui perferendis aliquam repellendus, unde, totam
        consequuntur velit provident amet inventore esse! Eius, molestiae?
      </Text>
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  padding: 1rem;
  height: 40rem;
  overflow-y: scroll;
  flex: 3;
`;
