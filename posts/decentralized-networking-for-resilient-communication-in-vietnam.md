---
title: Decentralized Networking for Resilient Communication in Vietnam
publish_date: 2025-02-26
---

## Abstract

Vietnam heavily relies on undersea cables for internet connectivity, making it vulnerable to frequent disruptions due to natural disasters, accidents, and geopolitical tensions. These outages impact businesses, financial systems, and essential services. Traditional centralized infrastructure fails to provide resilience in such scenarios, necessitating alternative solutions. This research explores the feasibility of a Kademlia-based decentralized networking protocol to provide a fault-tolerant, peer-to-peer communication system that can function even when primary internet infrastructure is compromised. We propose an experimental deployment of a Kademlia Distributed Hash Table (DHT) to enable decentralized message routing, file sharing, and local network resilience. This study evaluates the feasibility of such a system through simulation and small-scale hardware testing using Raspberry Pi nodes equipped with LoRaWAN capabilities. By addressing connectivity issues in real-world crisis scenarios, this research provides insights into the practicality of decentralized networks for disaster recovery and censorship-resistant communication in Vietnam.

## Problem Statement

Vietnam's internet connectivity is primarily dependent on undersea fiber-optic cables, which have a history of frequent disruptions due to physical damage, geopolitical conflicts, and maintenance delays. Each disruption results in significant economic losses and communication blackouts, affecting millions of users. Current solutions involve rerouting traffic through backup infrastructure, but this is costly and inefficient. A more resilient, decentralized approach is needed to mitigate the impact of future disruptions.

## Background

Vietnam connects to the global internet through five major submarine cable systems: Asia America Gateway (AAG), Asia Pacific Gateway (APG), Intra Asia (IA), Asia Africa Europe 1 (AAE-1), and Southeast Asia-Middle East-Western Europe 3 (SMW-3). Historical data shows that since 2018, Vietnam has experienced an average of 3-5 major cable disruptions annually, with repair times ranging from 2 weeks to 2 months.

During the most recent major disruption in January 2024, Vietnam lost approximately 70% of its international bandwidth for nearly three weeks, resulting in estimated economic losses of $18 million per day according to the Vietnam Internet Association. Such disruptions disproportionately affect e-commerce, financial services, remote work, and educational institutions.

## Proposed Solution

The proposed system implements a multi-layered decentralized architecture designed to provide resilient communication capabilities during infrastructure disruptions. At its core, the system utilizes a modified Kademlia Distributed Hash Table (DHT) for peer-to-peer routing and data storage, augmented with LoRaWAN technology for long-range wireless connectivity. This combination enables the creation of a self-organizing network that can function without centralized infrastructure.
The system architecture comprises five integrated layers:

1. Core Network Layer: Implements the Kademlia DHT for content addressing, node discovery, and message routing
2. Transport Layer: Provides physical connectivity through multiple channels including LoRaWAN, Wi-Fi, and traditional IP networks
3. Security Layer: Ensures confidentiality and integrity through end-to-end encryption and authentication mechanisms
4. Application Layer: Delivers user-facing services including messaging, file transfer, and emergency broadcasts
5. Incentive Layer: Maintains network participation through token-based rewards for resource contribution

This design provides several advantages over traditional approaches:

- No single point of failure
- Ability to operate during complete internet outages
- Progressive degradation rather than complete failure
- Economic sustainability through built-in incentive mechanisms
- Complementary operation alongside existing infrastructure
