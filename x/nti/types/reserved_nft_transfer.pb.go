// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: nti/reserved_nft_transfer.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ReservedNftTransfer struct {
	ReservedKey string `protobuf:"bytes,1,opt,name=reservedKey,proto3" json:"reservedKey,omitempty"`
	SrcNftHash  string `protobuf:"bytes,2,opt,name=srcNftHash,proto3" json:"srcNftHash,omitempty"`
	SrcChain    string `protobuf:"bytes,3,opt,name=srcChain,proto3" json:"srcChain,omitempty"`
	SrcAddr     string `protobuf:"bytes,4,opt,name=srcAddr,proto3" json:"srcAddr,omitempty"`
	DestNftHash string `protobuf:"bytes,5,opt,name=destNftHash,proto3" json:"destNftHash,omitempty"`
	DestChain   string `protobuf:"bytes,6,opt,name=destChain,proto3" json:"destChain,omitempty"`
	DestAddr    string `protobuf:"bytes,7,opt,name=destAddr,proto3" json:"destAddr,omitempty"`
	BlockHeight int32  `protobuf:"varint,8,opt,name=blockHeight,proto3" json:"blockHeight,omitempty"`
	CreatedAt   int32  `protobuf:"varint,9,opt,name=createdAt,proto3" json:"createdAt,omitempty"`
}

func (m *ReservedNftTransfer) Reset()         { *m = ReservedNftTransfer{} }
func (m *ReservedNftTransfer) String() string { return proto.CompactTextString(m) }
func (*ReservedNftTransfer) ProtoMessage()    {}
func (*ReservedNftTransfer) Descriptor() ([]byte, []int) {
	return fileDescriptor_387170ed3b286efd, []int{0}
}
func (m *ReservedNftTransfer) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ReservedNftTransfer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ReservedNftTransfer.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ReservedNftTransfer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReservedNftTransfer.Merge(m, src)
}
func (m *ReservedNftTransfer) XXX_Size() int {
	return m.Size()
}
func (m *ReservedNftTransfer) XXX_DiscardUnknown() {
	xxx_messageInfo_ReservedNftTransfer.DiscardUnknown(m)
}

var xxx_messageInfo_ReservedNftTransfer proto.InternalMessageInfo

func (m *ReservedNftTransfer) GetReservedKey() string {
	if m != nil {
		return m.ReservedKey
	}
	return ""
}

func (m *ReservedNftTransfer) GetSrcNftHash() string {
	if m != nil {
		return m.SrcNftHash
	}
	return ""
}

func (m *ReservedNftTransfer) GetSrcChain() string {
	if m != nil {
		return m.SrcChain
	}
	return ""
}

func (m *ReservedNftTransfer) GetSrcAddr() string {
	if m != nil {
		return m.SrcAddr
	}
	return ""
}

func (m *ReservedNftTransfer) GetDestNftHash() string {
	if m != nil {
		return m.DestNftHash
	}
	return ""
}

func (m *ReservedNftTransfer) GetDestChain() string {
	if m != nil {
		return m.DestChain
	}
	return ""
}

func (m *ReservedNftTransfer) GetDestAddr() string {
	if m != nil {
		return m.DestAddr
	}
	return ""
}

func (m *ReservedNftTransfer) GetBlockHeight() int32 {
	if m != nil {
		return m.BlockHeight
	}
	return 0
}

func (m *ReservedNftTransfer) GetCreatedAt() int32 {
	if m != nil {
		return m.CreatedAt
	}
	return 0
}

func init() {
	proto.RegisterType((*ReservedNftTransfer)(nil), "nti.nti.ReservedNftTransfer")
}

func init() { proto.RegisterFile("nti/reserved_nft_transfer.proto", fileDescriptor_387170ed3b286efd) }

var fileDescriptor_387170ed3b286efd = []byte{
	// 272 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0x31, 0x4e, 0xc3, 0x30,
	0x18, 0x85, 0xeb, 0x42, 0x9b, 0xc6, 0x0c, 0x48, 0x66, 0xb1, 0x10, 0x32, 0x11, 0x53, 0x59, 0xda,
	0x81, 0x13, 0x14, 0x96, 0x4a, 0x48, 0x1d, 0x22, 0x26, 0x96, 0x2a, 0x8d, 0xff, 0x10, 0x0b, 0xe4,
	0x54, 0xbf, 0x7f, 0x21, 0x7a, 0x0b, 0xae, 0xc1, 0x4d, 0x18, 0x3b, 0x32, 0xa2, 0xe4, 0x22, 0xc8,
	0x4e, 0x43, 0xb3, 0x58, 0x7a, 0xdf, 0x7b, 0x7e, 0x4f, 0xfa, 0xf9, 0xb5, 0x25, 0x33, 0x47, 0x70,
	0x80, 0xef, 0xa0, 0xd7, 0xb6, 0xa0, 0x35, 0x61, 0x66, 0x5d, 0x01, 0x38, 0xdb, 0x62, 0x45, 0x95,
	0x88, 0x2c, 0x99, 0x99, 0x25, 0x73, 0xf3, 0x35, 0xe4, 0x17, 0xe9, 0x21, 0xb8, 0x2a, 0xe8, 0xe9,
	0x10, 0x13, 0x09, 0x3f, 0xeb, 0xfe, 0x3f, 0xc2, 0x4e, 0xb2, 0x84, 0x4d, 0xe3, 0xb4, 0x8f, 0x84,
	0xe2, 0xdc, 0x61, 0xbe, 0x2a, 0x68, 0x99, 0xb9, 0x52, 0x0e, 0x43, 0xa0, 0x47, 0xc4, 0x25, 0x9f,
	0x38, 0xcc, 0x1f, 0xca, 0xcc, 0x58, 0x79, 0x12, 0xdc, 0x7f, 0x2d, 0x24, 0x8f, 0x1c, 0xe6, 0x0b,
	0xad, 0x51, 0x9e, 0x06, 0xab, 0x93, 0x7e, 0x57, 0x83, 0xa3, 0xae, 0x76, 0xd4, 0xee, 0xf6, 0x90,
	0xb8, 0xe2, 0xb1, 0x97, 0x6d, 0xf1, 0x38, 0xf8, 0x47, 0xe0, 0x57, 0xbd, 0x08, 0xd5, 0x51, 0xbb,
	0xda, 0x69, 0xdf, 0xbd, 0x79, 0xab, 0xf2, 0xd7, 0x25, 0x98, 0x97, 0x92, 0xe4, 0x24, 0x61, 0xd3,
	0x51, 0xda, 0x47, 0xbe, 0x3b, 0x47, 0xc8, 0x08, 0xf4, 0x82, 0x64, 0x1c, 0xfc, 0x23, 0xb8, 0xbf,
	0xfd, 0xae, 0x15, 0xdb, 0xd7, 0x8a, 0xfd, 0xd6, 0x8a, 0x7d, 0x36, 0x6a, 0xb0, 0x6f, 0xd4, 0xe0,
	0xa7, 0x51, 0x83, 0xe7, 0x73, 0x7f, 0xef, 0x8f, 0xb9, 0x7f, 0x69, 0xb7, 0x05, 0xb7, 0x19, 0x87,
	0x33, 0xdf, 0xfd, 0x05, 0x00, 0x00, 0xff, 0xff, 0xa4, 0x24, 0x0b, 0x25, 0x89, 0x01, 0x00, 0x00,
}

func (m *ReservedNftTransfer) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ReservedNftTransfer) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ReservedNftTransfer) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.CreatedAt != 0 {
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(m.CreatedAt))
		i--
		dAtA[i] = 0x48
	}
	if m.BlockHeight != 0 {
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(m.BlockHeight))
		i--
		dAtA[i] = 0x40
	}
	if len(m.DestAddr) > 0 {
		i -= len(m.DestAddr)
		copy(dAtA[i:], m.DestAddr)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.DestAddr)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.DestChain) > 0 {
		i -= len(m.DestChain)
		copy(dAtA[i:], m.DestChain)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.DestChain)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.DestNftHash) > 0 {
		i -= len(m.DestNftHash)
		copy(dAtA[i:], m.DestNftHash)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.DestNftHash)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.SrcAddr) > 0 {
		i -= len(m.SrcAddr)
		copy(dAtA[i:], m.SrcAddr)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.SrcAddr)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.SrcChain) > 0 {
		i -= len(m.SrcChain)
		copy(dAtA[i:], m.SrcChain)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.SrcChain)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.SrcNftHash) > 0 {
		i -= len(m.SrcNftHash)
		copy(dAtA[i:], m.SrcNftHash)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.SrcNftHash)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.ReservedKey) > 0 {
		i -= len(m.ReservedKey)
		copy(dAtA[i:], m.ReservedKey)
		i = encodeVarintReservedNftTransfer(dAtA, i, uint64(len(m.ReservedKey)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintReservedNftTransfer(dAtA []byte, offset int, v uint64) int {
	offset -= sovReservedNftTransfer(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ReservedNftTransfer) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.ReservedKey)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	l = len(m.SrcNftHash)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	l = len(m.SrcChain)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	l = len(m.SrcAddr)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	l = len(m.DestNftHash)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	l = len(m.DestChain)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	l = len(m.DestAddr)
	if l > 0 {
		n += 1 + l + sovReservedNftTransfer(uint64(l))
	}
	if m.BlockHeight != 0 {
		n += 1 + sovReservedNftTransfer(uint64(m.BlockHeight))
	}
	if m.CreatedAt != 0 {
		n += 1 + sovReservedNftTransfer(uint64(m.CreatedAt))
	}
	return n
}

func sovReservedNftTransfer(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozReservedNftTransfer(x uint64) (n int) {
	return sovReservedNftTransfer(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ReservedNftTransfer) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowReservedNftTransfer
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ReservedNftTransfer: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ReservedNftTransfer: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReservedKey", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ReservedKey = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SrcNftHash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SrcNftHash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SrcChain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SrcChain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field SrcAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.SrcAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DestNftHash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DestNftHash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DestChain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DestChain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DestAddr", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DestAddr = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BlockHeight", wireType)
			}
			m.BlockHeight = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BlockHeight |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 9:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field CreatedAt", wireType)
			}
			m.CreatedAt = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.CreatedAt |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipReservedNftTransfer(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthReservedNftTransfer
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipReservedNftTransfer(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowReservedNftTransfer
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowReservedNftTransfer
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthReservedNftTransfer
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupReservedNftTransfer
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthReservedNftTransfer
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthReservedNftTransfer        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowReservedNftTransfer          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupReservedNftTransfer = fmt.Errorf("proto: unexpected end of group")
)
