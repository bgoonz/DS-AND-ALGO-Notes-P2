# Networks

[Week 8 Flashcards](https://quizlet.com/532646422/week-8-flash-cards/)

## Network Models

- **Reference Model:** high-level overview of a complex topic provided by an organization that manages it.

### <u>**TCP/IP vs OSI**</u>

| Model | Good for                                         | Bad for                |
| ----- | ------------------------------------------------ | ---------------------- |
| TCP   | Building new system <br> Analyzing real networks | Conceptualization      |
| OSI   | Understanding concepts                           | Building new protocols |

## <u>TCP/IP Model</u>

#### _Transmission Control Protocol / Internet Protocol_

- Focuses on practical networking concepts and isn't tightly tied to practical protocols

##### Four-layer reference model

- Provide a form of shared communication between professionals

## ![tcp model layers](https://assets.aaonline.io/Module-Web/network/image-network-models-tcp-ip.svg)

#### Application

- Includes protocols related to user-facing data
- Anything transmitted from the **Transport Layer** is considered Application Layer data

#### Transport

- Includes transport protocols: TCP and UDP
- Focuses on connectivity between clients and servers
- Relies on the lower layers to establish network connectivity

#### Internet

- Data is processed in _packets_
- Routing is handled with IP addresses
- Connects separate networks together

#### Link

- Includes lower-level communication standards
- Manages resources on on other networks
- Focuses on getting data from one local network resource to another

#### _Fifth Layer_

- Physical Layer
- Helps separate electrical concepts like transmission across wires from data-oriented concepts like MAC addresses

  - _Remember these are "best fit" models; they translate loosely to the actual data_

- ##### **Encapsulation** refers to how layers map data

  - Higher layers are _encapsulated_, or wrapped, in lower layers.
  - Alternative networking reference models may define layers as beginning/ending at different points in the data
  - Lower layer data units include data for higher layers in their payloads.

## ![layer frame](https://assets.aaonline.io/Module-Web/network/image-network-models-encapsulation.svg)

## <u>OSI Model</u>

- Reference model that doesn't perform well with real world tools
- Focuses on standardization and has both conceptual layers and suggested protocols for each

  - This standardization could help prevent _vendor lock-in_

- ##### Seven Layer Reference Model

## ![osi layer model](https://assets.aaonline.io/Module-Web/network/image-network-models-osi.svg)

#### Application

- Includes information used by client-side software
- Data transmitted on this layer will interact directly with applications
- Can be displayed to the user with limited translation

#### Presentation

- where data gets translated into a presentable format
- often called the syntax layer since data is converted between machine-readable & human-readable syntax here as well
- may include data compression, encryption, and character encoding

#### Session

- includes protocols responsible for authentication and data continuity
  - may authorize a client with the server or re-establish a dropped connection

#### Transport

- utilizes transport protocols
- Processes here are focused on data integrity and connectivity

#### Network

- mirrors TCP/IP's Internet Layer
- manages connections between remote networks, transferring packets across intermediary devices

#### Data Link

- manages connections directly from one machine's network interface to another
- primarily used by machines in local networks

#### Physical

- manages translating from raw electrical signals to bits & bytes of data

---

### Binary and Hexadecimal Notation

- ##### Base - Amount of digits in notation

### Binary

- All computing a fundamental level is **Base 2**

  - Transistors (integrated circuit componenets) have _two_ voltage states

- #### Binary to Decimal

## ![binary to decimal](https://4.bp.blogspot.com/-_ozWsmbO7-g/VMj49QivTWI/AAAAAAAACbg/b5BxEpJqAQ4/s1600/Algorithm%2Bto%2Bconvert%2BBinary%2Bto%2BDecimal%2Bin%2BJava.gif)

### Hexidecimal

- Base 16 (Available digits 0 - F)
  - A is 10
  - F is 15
- 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

---

### Bits and Bytes

- **Bit** - in computers, a single digit

  - Can either be **on**(1) or **off**(0)

- **Byte** - sequence of \* bits
  | Unit | Value |
  | --------|-------------------------|
  |Kilobyte | 1000 bytes |
  |Megabyte | 1000<sup>2</sup> bytes |
  |Gigabyte | 1000<sup>3</sup> bytes |
  |Terabyte | 1000<sup>4</sup> bytes |
  |Petabyte | 1000<sup>5</sup> bytes |
  |Exabyte | 1000<sup>6</sup> bytes |
  |Zettabyte| 1000<sup>7</sup> bytes |
  |Yottabyte| 1000<sup>8</sup> bytes |

### <u>Base 10 vs. Base 2</u>

| Base 10   | Abbr | Value                  | Base 2   | Abbr | Value       |
| --------- | ---- | ---------------------- | -------- | ---- | ----------- |
| Kilobyte  | kB   | 1000 bytes             | Kibibyte | KiB  | 1024 bytes  |
| Megabyte  | MB   | 1000<sup>2</sup> bytes | Mebibyte | MiB  | 10242 bytes |
| Gigabyte  | GB   | 1000<sup>3</sup> bytes | Gibibyte | GiB  | 10243 bytes |
| Terabyte  | TB   | 1000<sup>4</sup> bytes | Tebibyte | TiB  | 10244 bytes |
| Petabyte  | PB   | 1000<sup>5</sup> bytes | Pibibyte | PiB  | 10245 bytes |
| Exabyte   | EB   | 1000<sup>6</sup> bytes | Exbibyte | EiB  | 10246 bytes |
| Zettabyte | ZB   | 1000<sup>7</sup> bytes | Zebibyte | ZiB  | 10247 bytes |
| Yottabyte | YB   | 1000<sup>8</sup> bytes | Yobibyte | YiB  | 10248 bytes |

<br>

---

## Internet Protocol

- **Transmission Control Program**: complex process that defines exactly how multiple networks can communicate with each other.
  - _fault tolerant_: data transmitted between networks can be cached and re-sent if it fails the first time
  - _end-to-end_: there are no single central systems that can take the whole network down; each host can send/receive to others
- **Internet**: a series of _internetworked_ systems
- **Packet-Switching**: IP's communication style
  - IP data is transmitted in a format known as a _packet_.
    - Message is split up into separate packets, delivered to a destination, and reassembled as appropriate.
    - A packet uses metadata in headers, and a body with content
      - _Headers_ are used to get the packet to its destination
      - _Body_ contains the information to transfer

### IP Versions

- #### <u>IP Address</u> - The internet protocol address assigned to a particular networking device (Ethernet adapter, Wi-Fi Adapter, etc)

- ## **IPv4**

  - **IPv4 Addressess** are composed of 4 _octets_, or 8-bit binary numbers
  - IPv4 Example: `192.168.1.1`
  - Packet's header consists of at least 13 fields, or sequences of binary bits

    - These fields start with a version identifier (0100, or "4" in binary)
    - Continue with 10 sequences that define things like:
      - Length of the header
      - Protocol type contained in the body
      - Wrap up with source and destination addresses for the packet
    - Also includes an allowance for a _14th optional_ header field called "Options"
      - Can contain extra metadata about the packets contents
      - Is not often used
      - A IPv4 header without options will be 20 bytes (160 bits)

#### Stacked Diagram of IPv4 header:

## ![ipv4](https://assets.aaonline.io/Module-Web/network/image-ip-ipv4-headers.svg)

- ## **IPv6**

  - New protocol version that allows more addresses than the standard ipv4
  - Uses 8 header fields
  - Supports optional _extension headers_ that come after these 8 fields (as opposed to IPv4's large "Options" block)

- ### <u>**Header Fields:**</u>

  #### Version:

  - 0110, or "6" in binary notation

  #### Traffic Class

  - used to identify different types of packets, like video or phone data

  #### Flow Label

  - an experimental option used for adding packet sequencing into IP

  #### Payload Length

  - lets the receiver know how large the data in the packet will be

  #### Next Header

  - Usually identifies the protocol type of the packet's data, but may indicate the first extension header (if present)

  #### Hop Limit

  - A means of preventing packets from being passed around routers forever, this field will be decremented by 1 every time the packet passes through an intermediary (like a router)

  #### Source Address

  - Where the packet originated

  #### Destination Address

  - Where the packet is heading

    ### Stacked Diagram of IPv6 Header:

## ![ipv6](https://assets.aaonline.io/Module-Web/network/image-ip-ipv6-headers.svg)

---

## Transport Protocols

- Protocols used in the transport layer (extra layer of information between HTTP and IP)

#### Ports

- Virtual interfaces that allow a single device to host different applications and services
  - There are 65,536 separate ports available to each transport protocol!
- Represented by numbers: `port 80`, `port 51234`, etc.

### TCP

- Most common transport protocol used
- Connection-oriented protocol: establishes a connection between two sockets.
  - Acts as a safeguard from other error-prone protocols underneath it, including _IP_ and _Ethernet_
- Pieces of data sent via TCP (referred to as _segments_) respect a strict order and verify when they have been received
  - data can't be "lost" across a TCP connection
  - if a segment is received out of order, the receiver will ask the transmitter to re-send the missing segment
  - This behavior makes TCP a reliable protocol
  - data arrives ordered and in full
- Underlying connection for HTTP, file transfers, and media streaming
- Applications using TCP may buffer data, or wait until a certain amount has been received before passing it to the user

### UDP

- _Unreliable_ protocol
  - connection-less and provides no verification for whether data is received
- Use cases:

  - real-time video sharing
  - voice-over-IP phone calls
  - DNS

  ##### <u>TCP vs UDP Protocols</u>

  - ###### **TCP (Transmission Control Protocol)** is used when you want reliable connections and want the packets to reach the destination in the correct order.
  - ###### **UDP (User Datagram Protocol)** is used when you don't mind a more unreliable connection, but where real time interactivity is more important. If you drop a few a packets, no big deal.

---

## TCP Connections

- TCP uses data units called segments

- ### Segments
  - formed from application data: TCP receives this data, breaks it down into transmittable units, and attaches a header to each unit
  - This header contains everything we need to ensure a reliable connection is established
  - #### Segment Header fields
    - Help satisfy two needs of the protocol: **reliable data transfer** and **consistent connections**
    ## ![segment header fields](https://assets.aaonline.io/Module-Web/network/image-ip-tcp-header-fields.svg)
    - #### Source / Destination Port
      - The first two fields indicate which port the request originated on and which port it's directed to
      - used to determine which sockets to use for the TCP connection.
    - #### Sequence Number
      - Used to establish the correct ordering of data.
      - At the start of a connection, TCP sets an Initial Sequence Number (ISN) that's sufficiently large enough to avoid conflicts.
      - Each byte of data transferred is then counted, beginning at the ISN, and used to calculate the sequence number for the segment.
      - Sequence numbers go hand-in-hand with the ...
    - #### Acknowledgement Number
      - Lets the sender know which sequence is expected next.
      - Cumulative, which is how TCP maintains proper ordering of segments.
      - The receiver will send an acknowledgement number that's one higher than the last sequence number plus the length of the last data received
    - #### Data Offset
      - Defines how long the segment header is.
      - This lets us know if there are options later on in the header or not.
    - #### Reserved
      - A short range of three bits, held over for later use.
      - These will always be 0.
    - #### Control Flags
      - These nine bits drive the TCP connection process
    - #### Window Size
      - Let the sender know how much data the receiver can accept.
      - Helps maintain the reliability of a connection: if a receiver is getting overloaded, they can lower the window size as a way of saying "slow down!".
      - If a slow connection can move faster, a larger window size is a way of saying "bring it on!".
    - #### Checksum
      - An error-checking mechanism.
      - Used to check the validity of a particular segment, not the whole series of segment (as with sequence/acknowledgement).
      - The TCP client can use the checksum to ensure the segment has been received correctly. If it doesn't match expectations, the segment will be discarded & ignored.
    - #### Urgent Pointer
      - TCP allows for data to be marked as urgent. This means it should be processed right away, regardless of sequence, interrupting any other transfer in process.
      - Useful when trying to terminate a long transfer, as we'd like to kill the connection without waiting for it to complete.
      - This field indicates how much urgent data to expect, if there is any.
    - #### Options
      - Used for flow control and may even include padding to fill out the expected length of the header with empty data.
- ### Control Flag Options
  - Segment head has 12 bits reserved for control flags
  ## ![control flag options](https://assets.aaonline.io/Module-Web/network/image-ip-tcp-header-control-flags.svg)
  - **URG:** The "urgent" bit. Lets us know if this segment contains urgent data.
  - **ACK:** The "acknowledgement" bit. Setting this bit means a message has been received successfully.
  - **PSH:** The "push" bit. This bit is used to indicate that buffered data should be passed on to the connected application.
  - **RST:** The "reset" bit. This bit means we should reset the connection. Receivers will send an RST segment when they receive unexpected data, either to a port that's not listening or dramatically out-of-sequence.
  - **SYN:** The "synchronize" bit. This flag is set on the the first segment from each side of the connection, and should include an ISN for the socket to begin sequencing from.
  - **FIN:** The "finished" bit. This bit lets each side know that transmission is done and the connection may be closed.
- ### _Three-Way Handshake_
  - TCP connections begin with a process called a three-way-handshake, also sometimes referred to as SYN-SYN-ACK. This name comes from the three interactions before the connection is officially "open":
    - The client notifies the server that data is incoming with a SYN segment.
    - The server acknowledges that data and sends its own segment, including both an ACK and its own SYN.
    - The client ACKnowledges with another segment to the server. Now both sides are ready to go!
  - TCP connections are often visualized using _ladder diagrams_, also sometimes called _timing diagrams_
  ## ![three-way-handshake](https://assets.aaonline.io/Module-Web/network/image-ip-tcp-three-way-opening.svg)
  - Each arrow represents a single segment being passed between hosts
  - ensures both sides are ready to work: if the client's SYN request fell on deaf ears, we would expect an RST segment back.
  - _Sequence number_ and _acknowledgement number_ are incremented for each segment.
    - Since these initial segments contain no data, each only increments by one.
    - During data transfer, the numbers will increment based on the length of data received so far.
- ### Data Transmission & Error Handling
  - Once the connection has been established, the client will send data segments over and the server will respond with ACK segments
    - The sequence number in each data segment indicates where our data starts, and the corresponding acknowledgement number should be the next position after our data ends
- ### Closing The Connection
  - TCP closes open connections similarly to the way they're opened: lots of handshakery! By default, this time it's a _four-way handshake_
  ## ![closing connection](https://assets.aaonline.io/Module-Web/network/image-ip-tcp-four-way-closing.svg)
  - When closing a connection, both sides wait a beat before actually closing.
    - This allows any delayed segments to slip in at the last minute!
    - It is impractical for the server to send a piggybacked FIN & ACK in the same way it sends a SYN & ACK to open the connection
      - To prevent this, the server responses are separated:
        - the server returns an ACK to the client's first FIN right away
        - it waits a moment to ensure there are no remaining data segments inbound
        - then it sends a corresponding FIN segment to let the client know it's shutting down.
- ### The TCP Socket State Lifecycle
  - TCP connection is between two sockets, or joint IP address/port pairs.
    - As the connection progresses, these sockets change _state_
      - During the process of data transfer, both sockets are considered to be in the ESTABLISHED state, while before a connection is established a server's open socket would be in the LISTEN state
    - Simple data transfer from start to finish:
    ## ![data transfer](https://assets.aaonline.io/Module-Web/network/image-ip-tcp-socket-states.svg)
    - The original TCP specification includes an alternative text-based chart for the lifecycle of these socket states

---

## DNS

#### _Domain Name System_

- Distributed approach to providing easily-understood names for inter-networked devices
- A protocol (on UDP port 53) that allows our computer to talk to a DNS Server and _resolve_ a Domain Name into an IP Address.

  - Example: `google.com` might resolve to `172.217.6.142`

- ### <u>Domain Name</u>

  - A human readable name assigned to an IP Address
  - Can be split into 3 parts:
    1. **Top-Level Domain(TLD)** is the last part of the domain, appearing just before the URL begins pointing at application routes (usually idicated with `/`'s) or query parameters (indicated with ? and &'s)
    - Best known TLDs are:
      - `.com`
      - `.net`
      - `.org`
    - Managed by _domain registries_ (special organizations that have demonstrated the ability to handle the immense workload involved)
    2. **Second-Level Domain**
    - Through domain registrars, consumers can purchase second-level domains
    - The registrar maintains a listing of each purchase
    3. **Third-Level Domain**
    - Some websites will have additional domains to the left of the second-level domain
    - These can be referred to by their formal names (third-level domain, fourth-level domain, etc.) but are often informally referred to as subdomains
      - The best-known subdomain is www, though this is less-used on newer sites.
      - Subdomains can usually be freely created by the consumer.

- ### DNS Records

  - Each name server maintains a _zone file_:
    - a text file containing host names
    - IP addresses
    - Resource types

  #### Common DNS Types:

  - **A**

    - Directly maps a domain name to an IPv4 Address

  - **AAAA**

    - Directly maps a domain name to an IPv6 Address

  - **CNAME**

    - Maps a domain name to another domain name
      - When `www` doesn't have a . it is a _relative_ reference (additional parts of the domain for this zone are implied)
      - When a domain in a zone file ends in a . we can treat it

  - **MX (Mail Exchanger)**

    - Defines the mail server for a domain
    - used by e-mail clients to direct messages to the appropriate mail servers

  - **NS**

    - Defines the DNS Servers for a zone (domain)

  - **SOA (Start of Authority)**
    - Defines which DNS Server is the authority for a zone (domain)

---

## Networking Hardware

### Levels of Control

- Physical ways of connecting computers together
- Main three types: _hubs, switches,_ and _routers_

## ![network hardware](https://i.pinimg.com/originals/63/dd/a1/63dda159a11d7336f9a67f3ff0d6073f.jpg)

- #### Hubs
  - simplest networking device you're likely to find in service
  - performs no network management and might be better known as a "signal splitter"
  - small metal boxes with a handful of physical connectors
  - Can't do any sort of filtering-- creates a lot of unnecessary load on the network
    - every single data packet is sent to every single device, all the time
    - share bandwidth across devices, so heavy traffic can result in lower speeds
  - Hubs were a helpful and necessary piece of hardware for a long time, but today there's little reason to use them
    - Best use for a hub now is as a temporary replacement while replacing a broken device
- #### Switches
  - **Traffic Control**
  - "Intelligent" hubs
    - track devices connected to them, help manage network load, and can manage separate internal networks with ease
    - biggest thing that separates a switch from a hub is the MAC address table.
    - can be chained together to cover large networks, or a 5-connector switch might be used for a small home network
    - Switches have improved on hubs' limitations: they don't share bandwidth, so you'll see less impact on speed through a switch than you might through a hub.
      -A network switch maintains an internal address book containing the MAC addresses of the devices connected to i
    - It uses this data to perform one of three actions with each piece of data it receives:
      - _flood_: When a destination address is unknown, the switch will flood received data out to all connected devices except where the data came from. When the intended recipient responds, the switch will update its MAC address table accordingly. This is how switches learn about connected devices, and it's significantly more efficient than a hub's behavior of flooding all the time!
      - _forward_: When a switch already has the destination MAC address in its internal table, it can send data directly to that device. This is called forwarding the data. No other devices connected to the switch are made aware of this data.
      - _filter_: Sometimes a switch will receive data on the same connector the data is destined for. In these cases, the switch will filter, or drop, the data entirely. This can be a little confusing to think about! If data arrives on the same connector it would later be sent out of, then we can assume the data was handled by some other part of our network, and the receiving switch can't do anything to help. Remember that this is very specifically related to the physical connector the data is received on: a switch will never act on data that comes in and goes out the same connector.
- #### Routers
  - Connect separate networks with each other
  - _Gateway_ to the Internet
  - Use IP addresses to make decisions about data
  - A router, like a switch, maintains an internal table of addresses
    - This _routing table_ is used to pass received data on through the network
    - Data may move on to another router, or the router may recognize the data and pass it to an internal switch.
  - Routers also participate in an important process called NAT, short for Network Address Translation
    - NAT helps minimize IP address overload by giving the router a single IP address to use for all external communication
      - The router then uses IP ports to map incoming data to internal device IP addresses in its routing table

---

### Following The Trail With `traceroute`

- The `traceroute` utility runs on the command line and uses UDP packets to monitor each device that data passes through as it moves from the source location to the target location
  - can determine where a network failure or slowdown might be occurring
- ##### `traceroute` vs. `tracert`
  - `tracert` is included with the Windows operating system, and uses ICMP (an alternative protocol also used by the ping utility) to trace data
  - `traceroute` is on Unix-based operating systems, including macOS, and uses UDP

---

## Wireshark

- a network analysis tool formerly known as Ethereal, captures packets in real time and display them in human-readable format
- includes filters, color coding, and other features that let you dig deep into network traffic and inspect individual packets
  - #### Color Coding
    - Wireshark uses colors to help you identify the types of traffic at a glance
      - **light purple** is TCP traffic
      - **light blue** is UDP traffic
      - **black** identifies packets with errors—for example, they could have been delivered out of order
  - #### Capturing Packets
    - Wireshark allows you to capture packets on the interface and inspect it
      - For example, if you want to capture traffic on your wireless network, click your wireless interface
    - Each packet has its own row and corresponding number assigned to it, along with each of these data points:
      - **No**: This field indicates which packets are part of the same conversation. It remains blank until you select a packet.
      - **Time**: The timestamp of when the packet was captured is displayed in this column. The default format is the number of seconds or partial seconds since this specific capture file was first created.
      - **Source**: This column contains the address (IP or other) where the packet originated.
      - **Destination**: This column contains the address that the packet is being sent to.
      - **Protocol**: The packet's protocol name, such as TCP, can be found in this column.
      - **Length**: The packet length, in bytes, is displayed in this column.
      - **Info**: Additional details about the packet are presented here. The contents of this column can vary greatly depending on packet contents.
      ## ![capture packets](https://assets.aaonline.io/Module-Web/network/wireshark-02.png)
  - #### Sample Captures
    - Download, open, and inspect each of these capture files so you can see what it looks like for that communication to have occurred over a network
      - `http.cap` A simple HTTP request and response
      - `dns.cap` Various DNS lookups
      - `wpa.cap` 802.11 capture with WPA data encrypted using the password "Induction"
  - #### Filtering Packets
    - Wireshark filter's help sift through large amounts of packets
    ## ![filter packets](https://assets.aaonline.io/Module-Web/network/wireshark-04.png)
  - #### Inspecting Packets
    - Click a packet to select it and you can dig down to view its details
    ## ![inspect packets](https://assets.aaonline.io/Module-Web/network/wireshark-05.png)
